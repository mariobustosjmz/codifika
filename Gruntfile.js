module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
        main: {
            options: {
                base: '',
                hostname: '*',
                port: 1337,
                useAvailablePort: true,
                livereload: true,
                open:{
                  target: 'http://127.0.0.1:1337'
                }
            }
        }
    },
    watch: {
      configFiles: {
        files: [ '*.html', 'css/*.css', 'img/*.img', 'img/*.svg'],
        options: {
          livereload:true,
          reload: true
        }
      }
    }    
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('serve', ['connect', 'watch']);

};