"use strict";

// const stagesContainer = document.querySelector(".stages");
var stagesSwiper = new Swiper('.stages .swiper', {
  slidesPerView: 1,
  spaceBetween: 50,
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
    769: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 10
    },
    1365: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 20
    }
  }
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsic3RhZ2VzU3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInBhZ2luYXRpb24iLCJlbCIsInR5cGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJHcm91cCIsInBhcnRpY2lwYW50U3dpcGVyIiwibG9vcCIsImF1dG9wbGF5IiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFNQSxZQUFZLEdBQUcsSUFBSUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO0VBQ2pEQyxhQUFhLEVBQUUsQ0FBQztFQUNoQkMsWUFBWSxFQUFFLEVBQUU7RUFFaEJDLFVBQVUsRUFBRTtJQUNWQyxFQUFFLEVBQUUsMkJBQTJCO0lBQy9CQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBRUQ7RUFDQUMsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSw0QkFBNEI7SUFDcENDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFFRDtFQUNBQyxXQUFXLEVBQUU7SUFDWCxHQUFHLEVBQUU7TUFDSFIsYUFBYSxFQUFFLENBQUM7TUFDaEJTLGNBQWMsRUFBRSxDQUFDO01BQ2pCUixZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUVELElBQUksRUFBRTtNQUNKRCxhQUFhLEVBQUUsQ0FBQztNQUNoQlMsY0FBYyxFQUFFLENBQUM7TUFDakJSLFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsSUFBTVMsaUJBQWlCLEdBQUcsSUFBSVgsTUFBTSxDQUFDLHVCQUF1QixFQUFFO0VBQzVEO0VBQ0FDLGFBQWEsRUFBRSxDQUFDO0VBQ2hCUyxjQUFjLEVBQUUsQ0FBQztFQUNqQlIsWUFBWSxFQUFFLENBQUM7RUFDZlUsSUFBSSxFQUFFLElBQUk7RUFFVkMsUUFBUSxFQUFFO0lBQ1JDLEtBQUssRUFBRTtFQUNULENBQUM7RUFDRDs7RUFFQVgsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRSxpQ0FBaUM7SUFDckNDLElBQUksRUFBRTtFQUNSLENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxrQ0FBa0M7SUFDMUNDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFFREMsV0FBVyxFQUFFO0lBQ1gsR0FBRyxFQUFFO01BQ0hSLGFBQWEsRUFBRSxDQUFDO01BQ2hCUyxjQUFjLEVBQUUsQ0FBQztNQUNqQlIsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxJQUFJLEVBQUU7TUFDSkQsYUFBYSxFQUFFLENBQUM7TUFDaEJTLGNBQWMsRUFBRSxDQUFDO01BQ2pCUixZQUFZLEVBQUU7SUFDaEI7RUFDRjtBQUNGLENBQUMsQ0FBQztBQ2xFRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBzdGFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlc1wiKTtcbmNvbnN0IHN0YWdlc1N3aXBlciA9IG5ldyBTd2lwZXIoJy5zdGFnZXMgLnN3aXBlcicsIHtcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgc3BhY2VCZXR3ZWVuOiA1MCxcblxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuc3RhZ2VzLXN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICB0eXBlOiAnYnVsbGV0cycsXG4gIH0sXG5cbiAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zdGFnZXMtc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3RhZ2VzLXN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG5cbiAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICBicmVha3BvaW50czoge1xuICAgIDc2OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgICB9LFxuXG4gICAgMTMwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiA3LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNSxcbiAgICB9LFxuICB9LFxufSlcblxuLy9jb25zdCBwYXJ0aWNpcGFudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcnRpY2lwYW50c1wiKTtcbmNvbnN0IHBhcnRpY2lwYW50U3dpcGVyID0gbmV3IFN3aXBlcignLnBhcnRpY2lwYW50cyAuc3dpcGVyJywge1xuICAvLyBEZWZhdWx0IHBhcmFtZXRlcnNcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gIHNwYWNlQmV0d2VlbjogMCxcbiAgbG9vcDogdHJ1ZSxcblxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiA0MDAwXG4gIH0sXG4gIC8vIE5hdmlnYXRpb24gYXJyb3dzXG5cbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnBhcnRpY2lwYW50cy1zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgdHlwZTogJ2ZyYWN0aW9uJyxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5wYXJ0aWNpcGFudHMtc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcucGFydGljaXBhbnRzLXN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG5cbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njk6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgfSxcbiAgICAxMzY1OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIH0sXG4gIH0sXG59KVxuXG5cblxuIiwiIl19
