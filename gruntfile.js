module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'assets/js/script.js': ['assets/components/js/*.js']
                } // files
            } // my_target
        } // uglify
    }) // initConfig
} // exports