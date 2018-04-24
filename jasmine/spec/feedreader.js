/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('url are defined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");
            }
        });

        it('names are defined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");
            }
        });
    });


    describe('The menu', function() {
        let menu_link=$(".menu-icon-link");

        it('is hidden', function() {
            expect($("body[class='menu-hidden']").length).not.toBe(0);
        });

        it('change "hidden" state', function() {
            for(let i = 0; i < 2; i++)
            {
              menu_link.click();
              expect($("body[class='menu-hidden']").length).toBe(i);
            }
        });
    });


    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0);
            done();
        });

        it('is hidden', function() {
            expect($(".feed").length).toBe(1);
        });
        // DA CONTROLLARE ANCORA
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */


    describe('New Feed Selection', function() {
      let old_feed = $(".feed");
      beforeEach(function(done) {
          loadFeed(0);
          done();
      });

      it('is hidden', function() {
        console.log(old_feed);
          console.log($(".feed"));
          expect(old_feed).not.toBe($(".feed"));
      });
       // DA CONTROLLARE ANCORA
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
