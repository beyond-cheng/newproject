YUI.add("np-login",function(e,t){e.LoginView=e.Base.create("loginView",e.View,[],{template:'<h2 class="login-title">\u767b\u5f55<span class="login-title-arrow"><span class="login-title-arrow-inside"></span><span class="login-title-arrow-outside"></span></span></h2><div class="login-body"><div class="login-field"><label class="login-field-label" for="user-name">\u7528\u6237\u540d</label><div class="login-field-element"><input type="text" name="name" id="user-name" class="login-field-text" value="abc"/></div></div><div class="login-field"><label class="login-field-label" for="user-password">\u5bc6\u7801</label><div class="login-field-element"><input type="password" name="password" id="user-password" class="login-field-text" value="123"/></div></div><div class="login-field"><div class="login-field-element"><button id="user-save" class="button-primary-s">\u767b\u9646</button></div></div></div>',events:{"#user-save":{click:"saveUser"}},saveUser:function(){var e=this.get("model"),t=this.get("container");e.save({attrs:{name:t.one("#user-name").get("value"),password:t.one("#user-password").get("value")}},function(e,t){e||(location.href="/")})},render:function(){var e=this.get("container");return e.setHTML(this.template),this}})},"@VERSION@",{requires:["np-models","view"]});
