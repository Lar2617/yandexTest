"use strict";

// const stagesContainer = document.querySelector(".stages");
var stagesSwiper = new Swiper('.stages .swiper', {
  slidesPerView: 1,
  spaceBetween: 50,
  loopFillGroupBlank: false,
  pagination: {
    el: '.stages-swiper-pagination',
    type: 'bullets'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.stages-swiper-button-next',
    prevEl: '.stages-swiper-button-prev'
  },
  // Responsive breakpoints
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40
    },
    1300: {
      slidesPerView: 3,
      slidesPerGroup: 7,
      spaceBetween: 25
    }
  }
});

//const participantsContainer = document.querySelector(".participants");
var participantSwiper = new Swiper('.participants .swiper', {
  // Default parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 4000
  },
  // Navigation arrows

  pagination: {
    el: '.participants-swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.participants-swiper-button-next',
    prevEl: '.participants-swiper-button-prev'
  },
  breakpoints: {
    680: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 10
    },
    1300: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 20
    }
  }
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsic3RhZ2VzU3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3BGaWxsR3JvdXBCbGFuayIsInBhZ2luYXRpb24iLCJlbCIsInR5cGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJHcm91cCIsInBhcnRpY2lwYW50U3dpcGVyIiwibG9vcCIsImF1dG9wbGF5IiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFNQSxZQUFZLEdBQUcsSUFBSUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO0VBQ2pEQyxhQUFhLEVBQUUsQ0FBQztFQUNoQkMsWUFBWSxFQUFFLEVBQUU7RUFDaEJDLGtCQUFrQixFQUFFLEtBQUs7RUFDekJDLFVBQVUsRUFBRTtJQUNWQyxFQUFFLEVBQUUsMkJBQTJCO0lBQy9CQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBRUQ7RUFDQUMsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSw0QkFBNEI7SUFDcENDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFFRDtFQUNBQyxXQUFXLEVBQUU7SUFDWCxHQUFHLEVBQUU7TUFDSFQsYUFBYSxFQUFFLENBQUM7TUFDaEJVLGNBQWMsRUFBRSxDQUFDO01BQ2pCVCxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUVELElBQUksRUFBRTtNQUNKRCxhQUFhLEVBQUUsQ0FBQztNQUNoQlUsY0FBYyxFQUFFLENBQUM7TUFDakJULFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsSUFBTVUsaUJBQWlCLEdBQUcsSUFBSVosTUFBTSxDQUFDLHVCQUF1QixFQUFFO0VBQzVEO0VBQ0FDLGFBQWEsRUFBRSxDQUFDO0VBQ2hCVSxjQUFjLEVBQUUsQ0FBQztFQUNqQlQsWUFBWSxFQUFFLENBQUM7RUFDZlcsSUFBSSxFQUFFLElBQUk7RUFFVkMsUUFBUSxFQUFFO0lBQ1JDLEtBQUssRUFBRTtFQUNULENBQUM7RUFDRDs7RUFFQVgsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRSxpQ0FBaUM7SUFDckNDLElBQUksRUFBRTtFQUNSLENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxrQ0FBa0M7SUFDMUNDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFFREMsV0FBVyxFQUFFO0lBQ1gsR0FBRyxFQUFFO01BQ0hULGFBQWEsRUFBRSxDQUFDO01BQ2hCVSxjQUFjLEVBQUUsQ0FBQztNQUNqQlQsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxJQUFJLEVBQUU7TUFDSkQsYUFBYSxFQUFFLENBQUM7TUFDaEJVLGNBQWMsRUFBRSxDQUFDO01BQ2pCVCxZQUFZLEVBQUU7SUFDaEI7RUFDRjtBQUNGLENBQUMsQ0FBQztBQ2xFRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBzdGFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlc1wiKTtcbmNvbnN0IHN0YWdlc1N3aXBlciA9IG5ldyBTd2lwZXIoJy5zdGFnZXMgLnN3aXBlcicsIHtcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgbG9vcEZpbGxHcm91cEJsYW5rOiBmYWxzZSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnN0YWdlcy1zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgdHlwZTogJ2J1bGxldHMnLFxuICB9LFxuXG4gIC8vIE5hdmlnYXRpb24gYXJyb3dzXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3RhZ2VzLXN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN0YWdlcy1zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuXG4gIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njk6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgfSxcblxuICAgIDEzMDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogNyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjUsXG4gICAgfSxcbiAgfSxcbn0pXG5cbi8vY29uc3QgcGFydGljaXBhbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJ0aWNpcGFudHNcIik7XG5jb25zdCBwYXJ0aWNpcGFudFN3aXBlciA9IG5ldyBTd2lwZXIoJy5wYXJ0aWNpcGFudHMgLnN3aXBlcicsIHtcbiAgLy8gRGVmYXVsdCBwYXJhbWV0ZXJzXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBzcGFjZUJldHdlZW46IDAsXG4gIGxvb3A6IHRydWUsXG5cbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogNDAwMFxuICB9LFxuICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5wYXJ0aWNpcGFudHMtc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIHR5cGU6ICdmcmFjdGlvbicsXG4gIH0sXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcucGFydGljaXBhbnRzLXN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnBhcnRpY2lwYW50cy1zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNjgwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIH0sXG4gICAgMTMwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICB9LFxuICB9LFxufSlcblxuXG5cbiIsIiJdfQ==
