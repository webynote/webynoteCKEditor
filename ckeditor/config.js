/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config


	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	//config.removeButtons = 'Underline,Subscript,Superscript';

	config.toolbar = [
		{ name: 'tools', items: [ 'Maximize','Undo', 'Redo','Link', 'Unlink' ] },
		//{ name: 'clipboard', items: [ 'Undo', 'Redo' ] },
		//{ name: 'links', items: [ 'Link', 'Unlink' ] },
		{ name: 'insert', items: [ 'CodeSnippet', 'Mathjax', 'Table', 'HorizontalRule', 'base64image','Source' ] },
		//{ name: 'document', items: [ 'Source' ] },
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline','Strike', 'RemoveFormat', 'Blockquote','Subscript','Superscript' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
		{ name: 'styles', items: [ 'Styles', 'Format','TextColor', 'BGColor' ] }
		//{ name: 'colors', items: [ 'TextColor', 'BGColor' ] }

	];

	config.allowedContent = true;

	config.entities = false;
	config.basicEntities = false;

	config.entities_greek = false;
	config.entities_latin = false;

	config.entities_additional = '';

	config.htmlEncodeOutput = false;

	config.extraPlugins = "lineutils,widget,codesnippet,prism,imageresize,ytweb";
	config.mathJaxLib = '//cdn.mathjax.org/mathjax/2.2-latest/MathJax.js?config=TeX-AMS_HTML';
	//config.imageUploadUrl = '';
	//config.uploadUrl = '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json';
	config.uploadUrl = '/uploader/upload.php';
	config.imageUploadUrl = '/uploader/upload.php?type=Images';
	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';


	console.log('Image resize');
	console.log(config);
	config.resize_maxHeight = 900;
	config.resize_maxWidth = 900;
	config.resize_minHeight = 250;
	config.resize_minWidth = 750;

	console.log('Image resize2');
	console.log(config);

	//config.imageResize.config.maxWidth= 600;

	//config.imageResize.config.maxHeight= 600;



	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	// Permit other iframes
	config.extraAllowedContent = 'iframe[*]';
	
};
