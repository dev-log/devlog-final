import React, {Component} from 'react';

class About extends Component {

    render() {
        return (
            <div>
                <!-- Begin MailChimp Signup Form -->
                <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
                    <style type="text/css">
                        #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
                        /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
                           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                    </style>
                    <div id="mc_embed_signup">
                        <form action="https://DevLog.us18.list-manage.com/subscribe/post?u=8a218db5e790c0a299516bd8c&amp;id=55480d01d3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                                <div id="mce-responses" class="clear">
                                    <div className="response" id="mce-error-response" style="display:none"></div>
                                    <div class="response" id="mce-success-response" style="display:none"></div>
                                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8a218db5e790c0a299516bd8c_55480d01d3" tabindex="-1" value=""></div>
                                <div className="clear" className="btn btn-primary btn-lg" ><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></div>
                            </div>
                        </form>
                    </div>
                <!--End mc_embed_signup-->
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default About;
