<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/mootools/1.5.2/mootools.min.js"></script>
        <script src="js/moomore.js"></script>
        <script src="js/content-flipper.js"></script>
    </head>
    <body>
        <div id="content-flipper-1">
            <ul>
                <li>Page 1</li>
                <li>Page 2</li>
                <li>Page 3</li>
                <li>Page 4</li>
            </ul>
            <div class="content">
                <section>
                    <h1>
                        First Section
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eum nisi vel necessitatibus reiciendis officiis tenetur doloribus consequuntur nemo deserunt temporibus omnis, est architecto nostrum quia non pariatur facilis itaque!
                    </p>
                </section>
                <section>
                    <h1>
                        Second Section
                    </h1>
                    <section>This section has a section in it.
                    </section>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eum nisi vel necessitatibus reiciendis officiis tenetur doloribus consequuntur nemo deserunt temporibus omnis, est architecto nostrum quia non pariatur facilis itaque!
                    </p>
                </section>
                <section>
                    <h1>
                        Third Section
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eum nisi vel necessitatibus reiciendis officiis tenetur doloribus consequuntur nemo deserunt temporibus omnis, est architecto nostrum quia non pariatur facilis itaque!
                    </p>
                </section>
                <section>
                    <h1>
                        Fourth Section
                    </h1>
                    <ul>
                        <li>Something</li>
                        <li>Something else</li>
                        <li>Another thing</li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eum nisi vel necessitatibus reiciendis officiis tenetur doloribus consequuntur nemo deserunt temporibus omnis, est architecto nostrum quia non pariatur facilis itaque!
                    </p>
                </section>
            </div>
        </div>
        <div id="content-flipper-2">
            <ul>
                <li>Page 1</li>
                <li>Page 2</li>
                <li>Page 3</li>
                <li>Page 4</li>
            </ul>
            <div class="content">
                <div>
                    <h1>
                        First Section
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eum nisi vel necessitatibus reiciendis officiis tenetur doloribus consequuntur nemo deserunt temporibus omnis, est architecto nostrum quia non pariatur facilis itaque!
                    </p>
                </div>
                <div>
                    <h1>
                        Second Section
                    </h1>
                    <section>This section has a section in it.
                    </section>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eum nisi vel necessitatibus reiciendis officiis tenetur doloribus consequuntur nemo deserunt temporibus omnis, est architecto nostrum quia non pariatur facilis itaque!
                    </p>
                </div>
                <div>
                    <h1>
                        Third Section
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eum nisi vel necessitatibus reiciendis officiis tenetur doloribus consequuntur nemo deserunt temporibus omnis, est architecto nostrum quia non pariatur facilis itaque!
                    </p>
                </div>
                <div>
                    <h1>
                        Fourth Section
                    </h1>
                    <ul>
                        <li>Something</li>
                        <li>Something else</li>
                        <li>Another thing</li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eum nisi vel necessitatibus reiciendis officiis tenetur doloribus consequuntur nemo deserunt temporibus omnis, est architecto nostrum quia non pariatur facilis itaque!
                    </p>
                </div>
            </div>
        </div>
        <script>
            new ContentFlipper("content-flipper-1");
            new ContentFlipper("content-flipper-2", {
                contentSectionSelector:"div"
            });
        </script>
    </body>
</html>