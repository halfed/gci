module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	sass: {
    dist: {
	      files: {
	        'css/main.css': 'css/main.scss'
	      }
	    }
	},
    cssmin: {
	    target: {
	      files: [{
	        expand: true,
	        cwd: 'css',
	        src: ['main.css', '!*.min.css'],
	        dest: 'css/',
	        ext: '.min.css'
	        }]
	    }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
};