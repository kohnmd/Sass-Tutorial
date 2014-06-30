module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'assets/js/script.js': ['assets/components/js/*.js']
                } // files
            } // my_target
        }, // uglify
        
        watch: {
            options: { livereload: true },
            scripts: {
                files: ['assets/components/js/*.js'],
                tasks: ['uglify']
            }, // scripts
            html: {
                files: ['*.html']
            }
        } // watch
    }); // initConfig
    
    grunt.registerTask('default', 'watch');
} // exports