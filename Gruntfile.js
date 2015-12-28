module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
            scripts: {
                src: ['app/home/**.js','app/**.js', 'lib/**.js']
            },

            tests: { // We can have more than one jshint task, this ones called `jshint:tests`
                src: 'tests/**.js'
            }
        },

        uglify: {
            scripts: {
                expand: true,
                cwd: 'scripts/',
                src: '**.js',
                dest: 'build/',
                ext: '.min.js'
            }
        },

        watch: {
            scripts: {
                files: 'app/home/**.js',
                task: 'jshint:scripts'
            },

            styles: {
                files: 'styles/**.less',
                task: 'less:styles'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', ['jshint', 'uglify']);

};