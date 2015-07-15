var React = require('react');
var IndexContent = React.createClass({
    render: function() {
        return(
                <div>
                    <div className="docs-primary-actions clearfix">
                        <a className="button button-primary-action" href="">
                            <strong><i className="icon-earth"></i> Web</strong>
                            <em>Javascript</em>
                        </a>

                        <a className="button button-primary-action" href="">
                            <strong><i className="icon-apple"></i> iOS</strong>
                            <em>Objective C</em>
                        </a>

                        <a className="button button-primary-action" href="">
                            <strong><i className="icon-android"></i> Android</strong>
                            <em>Java</em>
                        </a>
                    </div>
                    <div className="docs-primary-actions clearfix">
                        <a className="button button-primary-action" href="">
                            <strong><i className="icon-console"></i> REST</strong>
                            <em>Server Side Platforms</em>
                        </a>

                        <a className="button button-primary-action" href="">
                            <strong><i className="icon-lock"></i> Security</strong>
                            <em>Securing Your App</em>
                        </a>

                        <a className="button button-primary-action" href="">
                            <strong><i className="icon-rocket"></i> Hosting</strong>
                            <em>Static Asset Hosting</em>
                        </a>
                    </div>
                    <div className="docs-primary-actions clearfix">
                            <a className="button button-primary-action" href="">
                            <strong><i className="icon-suitcase"></i> Partnerships</strong>
                            <em>Product API integrations</em>
                        </a>

                        <a className="button button-primary-action" href="">
                            <strong><i className="icon-database2"></i> Open Data Sets</strong>
                            <em>Realtime Public Data</em>
                        </a>

                        <a className="button button-primary-action" href="">
                            <strong><i className="icon-thumbs-up"></i> Support</strong>
                            <em>Need Help</em>
                        </a>
                    </div>

                    <div className="clear"></div>
                </div>
            );
}
});
module.exports = IndexContent;
