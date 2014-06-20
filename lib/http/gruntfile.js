var uuid = require('node-uuid')
  , service = require('./build/buildconfig')
  , fs = require('fs');

/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-node-inspector');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ember-templates');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/* Copyrite <%= pkg.name %> */'
    },

    clean: ['public/css/**', 'public/js/**', 'public/fonts/**'],

    copy: {
      css: {
        expand: true,
        cwd: 'client/css',
        src: '**/*.css',
        dest: 'public/css'
      },
      fonts: {
        expand: true,
        cwd: 'client/assets/fonts',
        src: '**/*',
        dest: 'public/fonts'
      }
    },

    'node-inspector': {
      app: {}
    },

    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          nodeArgs: ['--debug'],
          watch: ['routes'],
          ignore: ['public/**', '*.jade', 'temp/**', 'resources**']
        }
      }
    },

    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /client\/templates\//
        },
        files: {
          "public/js/templates-<%= meta.buildId %>.js": ["client/templates/**/*.hbs"]
        }
      }
    },

    uglify: {
      vendor: {
          src: ['<banner:meta.banner>'
            ,  'client/assets/vendor/jquery.js'
            , 'client/assets/vendor/handlebars-1.1.2.js'
            , 'client/assets/vendor/ember-1.5.0.js'
            , 'client/assets/vendor/ember-data.js'
            , 'client/assets/vendor/form.jquery.js'
            , 'client/assets/vendor/moment-2.6.0.js'
          ],
          dest: 'public/js/app-vendor.js'
      },

      app: {
        options: {
          mangle: false,
          compress: false,
          sourceMap: true,
          sourceMapIncludeSources: true,
          sourceMapName: 'public/js/source-map.js',
          banner: '/*! <%= pkg.name %> - v<%= meta.buildId %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        src: ['<banner:meta.banner>',
          'client/**/*.js',
          '!client/assets/**/*'
        ],
        dest: 'public/js/<%= meta.buildId %>.js'
      }
    },

    replace: {
      dist: {
        options: {
          variables: {
            'buildId': '<%= meta.buildId %>'
          }
        },
        files: [
          {
            src: ['views/layout_src.jade'],
            dest: 'views/layout.jade'
          }
        ]
      }
    },

    less: {
      development: {
        options: {
          yuicompress: true
        },
        files: {
          "public/css/<%= meta.buildId %>.css": "client/assets/less/imports.less"
        }
      }
    },

    jade: {
      frontend: {
        options: {
          compileDebug: false,
          namespace: 'App.templates',
          client: true,
          data: {
            debug: false
          },
          processName: function(str) { return str.match(/^server\/views\/shared\/(.*)\.jade$/)[1]; }
        },
        files: {
          'public/js/templates-<%= meta.buildId %>.js': 'views/shared/*.jade'
        }
      }
    },

    watch: {
      options: {
        livereload:true,
        nospawn: true
      },
      javascript: {
        files: ['client/**/*.js', '!client/assets/**/*' ],
        tasks: ['UpdateJS']
      },
      layout_src: {
        files: 'views/layout_src.jade',
        tasks: ['UpdateLayout']
      },
      css: {
        files: 'client/css/*.less',
        tasks: ['UpdateCSS']
      },
      jade: {
        files: 'views/shared/*.jade',
        tasks: ['UpdateJade']
      },
      handlebars: {
        files: 'client/**/*.hbs',
        tasks: ['UpdateEmber']
      }
    },

    concurrent: {
      watchers: {
        tasks: ['nodemon', 'node-inspector', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      },
      compilers: {
        tasks: ['jade:frontend', 'uglify', 'less'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.registerTask('UpdateLayout', function() {
    var buildConfig = service.getConfig();
    grunt.config.set('replace.dist.options.variables', buildConfig);
    grunt.task.run(['replace']);
  });

  grunt.registerTask('UpdateJS', function() {
    var buildConfig = service.getConfig();
    buildConfig.js = uuid.v4();
    grunt.config.set('replace.dist.options.variables', buildConfig);

    grunt.config.set('meta.buildId', buildConfig.js);
    grunt.task.run(['uglify:app', 'replace', 'copy']);
    service.saveConfig(buildConfig);
  });

  grunt.registerTask('UpdateCSS', function() {
    var buildConfig = service.getConfig();
    buildConfig.css = uuid.v4();
    grunt.config.set('replace.dist.options.variables', buildConfig);

    grunt.config.set('meta.buildId', buildConfig.css);
    grunt.task.run(['less', 'replace', 'copy']);
    service.saveConfig(buildConfig);
  });

  grunt.registerTask('UpdateJade', function() {
    var buildConfig = service.getConfig();
    buildConfig.jade = uuid.v4();
    grunt.config.set('replace.dist.options.variables', buildConfig);

    grunt.config.set('meta.buildId', buildConfig.jade);
    grunt.task.run(['jade:frontend', 'replace']);
    service.saveConfig(buildConfig);
  });

  grunt.registerTask('UpdateEmber', function() {
    var buildConfig = service.getConfig();
    buildConfig.jade = uuid.v4();
    grunt.config.set('replace.dist.options.variables', buildConfig);

    grunt.config.set('meta.buildId', buildConfig.jade);
    grunt.task.run(['emberTemplates', 'replace']);
    service.saveConfig(buildConfig);
  });

  grunt.registerTask('default', 'Default dev task', function() {
    var buildConfig = service.getConfig();
    var buildid = uuid.v4();

    buildConfig.css = buildid;
    buildConfig.js = buildid;
    buildConfig.jade = buildid;

    grunt.config.set('meta.buildId', buildid);
    grunt.config.set('replace.dist.options.variables', buildConfig);

    fs.writeFileSync('currentbuild.json', JSON.stringify(buildConfig));
    grunt.task.run(['clean', 'emberTemplates', 'uglify', 'less' , 'replace', 'copy','concurrent:watchers']);
  });
};
