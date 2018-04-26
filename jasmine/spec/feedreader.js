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
        /* This test that all feeds in the allFeeds object
         * has a URL defined and that the URL is not empty.
         */
        it('url are defined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");
            }
        });
        /* This test that all feeds in the allFeeds object
         * has a name defined and that name is not empty.
         */
        it('names are defined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");
            }
        });
    });

    /* A test suite for the menu */
    describe('The menu', function() {
        const menu_link = $(".menu-icon-link");
        /* This test that the menu element is hidden by default. */
        it('is hidden', function() {
            expect($("body[class='menu-hidden']").length).not.toBe(0);
        });
        /* This test that the menu changes
         * visibility when the menu icon is clicked.
         */
        it('change "hidden" state', function() {
            for(let i = 0; i < 2; i++)
            {
                menu_link.click();
                expect($("body[class='menu-hidden']").length).toBe(i);
            }
        });
    });

    /* A test suite for check if loadFeed load something */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() { done(); });
        });
        /* This test ensures when the loadFeed function is
         * called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('add at least a .entity', function() {
            expect($(".feed .entry").length).not.toBeLessThan(0);
        });
    });

    /* A test suite for check if feed loaded add content to the page */
    describe('New Feed Selection', function() {
        const old_feed = $(".feed").html();
        beforeEach(function(done) {
            loadFeed(0, function() { done(); });
        });
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('change the content', function() {
            expect(old_feed).not.toBe($(".feed").html());
        });
    });
}());
