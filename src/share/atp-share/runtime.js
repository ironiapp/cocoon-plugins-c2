/**
 * Object holder for the plugin
 */
cr.plugins_.ATPShare = function(runtime) {
    this.runtime = runtime;
};

/**
 * C2 plugin
 */
(function() {
       
        var pluginProto = cr.plugins_.ATPShare.prototype;
        pluginProto.Type = function(plugin) {
            this.plugin = plugin;
            this.runtime = plugin.runtime;
        };
        var typeProto = pluginProto.Type.prototype;
        typeProto.onCreate = function() {};

        /**
         * C2 specific behaviour
         */
        pluginProto.Instance = function(type) {
            this.type = type;
            this.runtime = type.runtime;
        };
        var instanceProto = pluginProto.Instance.prototype;
        var self;
        
        instanceProto.onCreate = function() {
            self = this;  
        };

        function Cnds() {};

        // banner conditions
        Cnds.prototype.onShareComplete = function() {
            return true;
        };
        Cnds.prototype.onShareFail = function() {
            return true;
        }

        pluginProto.cnds = new Cnds();
        /**
         * Plugin actions
         */
        function Acts() {};

        // banner actions
        Acts.prototype.Share = function(text, img) {
            Cocoon.Share.share(text, img, function (data){
                if(data.completed){
                    console.log(JSON.stringify(data.activity));
                    self.runtime.trigger(cr.plugins_.ATPShare.prototype.cnds.onShareComplete, self);
                }
                else {
                    console.log(JSON.stringify(data.error));
                    self.runtime.trigger(cr.plugins_.ATPShare.prototype.cnds.onShareFail, self);
                }
            });
        };

        pluginProto.acts = new Acts();

}());