module.exports = {
  friendlyName: 'Get slideshow',
  description: '',
  inputs: {
    moduleId: {
      type: 'number',
      required: true
    }
  },
  exits: {
    success: {
      outputFriendlyName: 'Slideshow',
    },
  },
  fn: async function (inputs, exits) {

    let parsedSlides = '';
    let slides = await Slides.find({
      where: {
        moduleId: inputs.moduleId,
        status: true
      },
      sort: 'id ASC'
    });
console.log(slides);
    for (const slide of slides) {
      parsedSlides += '' +
        '<li >' +
        '<div>' +
        '<img src="' + slide.image + '" alt="" uk-cover>' +
        '<div class="uk-position-cover uk-overlay-primary uk-text-center">' +
        '<div class="uk-position-bottom">' +
        '<h1>' + slide.header + '</h1>' +
        '<p class="description">' + slide.description + '</p>' +
        '<p>' +
        '<a href="' + slide.link + '" class="uk-button uk-button-danger">Перейти в раздел</a>' +
        '</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</li>';
    }


    let body = '' +
      '<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 1920:1200; animation: push; autoplay: true; autoplay-interval: 3000; pause-on-hover: false">' +
      '<ul class="uk-slideshow-items">' +
      '' + parsedSlides +
      '</ul>' +
      '' +
      '<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>' +
      '<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>' +
      '</div>';
    return exits.success(body);
  }
};

