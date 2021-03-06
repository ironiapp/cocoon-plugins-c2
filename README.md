Cocoon plugins for Construct 2
===============================

These plugins for Construct 2 are adapted from the [Atomic Plugins](http://atomic-plugins.com/) for Cordova. They can be used in Construct 2, **but they can't be tested** on it. They require an **exportation for cordova** and additional [plugin installations](#adding-the-plugins-to-a-project-after-exportation). 

## Content

* [Configuration](#configuration)
	* [Ads](#ads)
	* [InApps](#inapps)
	* [Native share](#native-share)
	* [Cocoon Canvas+](#cocoon-canvas)
	* [Social integration](#social-integration)
* [Installation](#installation)
* [Adding a plugin to a project after exportation](#adding-the-plugins-to-a-project-after-exportation)
	* [Ads](#ads-1)
	* [InApps](#in-app-purchases)
	* [Native share](#native-share-1)
	* [Cocoon Canvas+](#cocoon-canvas-1)
	* [Social integration](#social-integration-1)
* [Important information to take into account](#important-information-to-take-into-account)
* [Need help?](#need-help)
* [Changelog](#changelog)
* [License](#license) 

## Configuration

### Ads

The plugin can be configured by selecting the object "Cocoon Ads" from the "Object types" list inside Construct 2.

![Ads actions](images/ads-actions.png)
![Ads events](images/ads-events.png)
![Ads config](images/ads-config.png)

### InApps

The plugin is added by selecting the object "Cocoon InApps" from the "Object types" list inside Construct 2.

![InApps actions](images/inapps-actions.png)
![InApps events](images/inapps-events.png)
![InApps expressions](images/inapps-expressions.png)

### Native Share

The plugin is added by selecting the object "Cocoon Share" from the "Object types" list inside Construct 2.

![Native Share actions](images/share-actions.png)
![Native Share events](images/share-events.png)

### Cocoon Canvas+

The plugin is added by selecting the object "Cocoon CanvasPlus" from the "Object types" list inside Construct 2.

This plugin will only work inside Canvas+ webview engine in Cocoon.io cloud compiler. 

![Cocoon Canvas+ actions](images/canvasplus-actions.png)
![Cocoon Canvas+ events](images/canvasplus-events.png)
![Cocoon Canvas+ expressions](images/canvasplus-expressions.png)

### Social integration 

This plugin is divided in three different parts, one of each social service available. 

#### Game Center

The plugin is added by selecting the object "Cocoon GameCenter" from the "Object types" list inside Construct 2.

![Game Center actions](images/gc-actions.png)
![Game Center events](images/gc-events.png)
![Game Center expressions](images/gc-expressions.png)

#### Google Play Games

The plugin is added by selecting the object "Cocoon GooglePlayGames" from the "Object types" list inside Construct 2.

![Google Play Games actions](images/gpg-actions.png)
![Google Play Games events](images/gpg-events.png)
![Google Play Games expressions](images/gpg-expressions.png)

#### Facebook 

Work in progress

## Installation

### Manual installation

* **Close Construct 2**
* Checkout the 'master' branch from this repository. You will see several folders, one called "common" and one more for each of the available plugins.  
* Copy the folder which is inside the name of the plugin. They will always start by "cocoon". For example, inside "ads" there is one called "cocoon-ads". 
* Paste the whole folder into *_CONSTRUCT_2_INSTALLATION_FOLDER_*\exporters\html5\plugins.

And that's all! You can open Contruct2 to start using them! 

## Adding the plugins to a project after exportation 

### Ads 

After the cordova exportation and the creation of the project, one of the following plugins are needed, depending on the Ad Service you want to use. 

If you are using the CLI, copy and paste the command for installing the plugin in your project. 

If you are using the new Cocoon.io cloud compiler, select the plugin id from the plugin list in the project configuration and the plugin will be intalled automatically. 

#### Admob 

* Android
```
	cordova plugin add cocoon-plugin-ads-android-admob;
```
* iOS
```
	cordova plugin add cocoon-plugin-ads-ios-admob; 
```
#### Mopub
* Android
```
	cordova plugin add cocoon-plugin-ads-android-mopub;
```
* iOS
```
	cordova plugin add cocoon-plugin-ads-ios-mopub;
```
In addition, there are optional MoPub adapters for iOS and Android.

* Android
```
	cordova plugin add cocoon-plugin-ads-android-adcolony;
	cordova plugin add cocoon-plugin-ads-android-admob;
	cordova plugin add cocoon-plugin-ads-android-charboost;
	cordova plugin add cocoon-plugin-ads-android-greystripe;
	cordova plugin add cocoon-plugin-ads-android-inmobi;
	cordova plugin add cocoon-plugin-ads-android-millennial;
```
* iOS 
```
	cordova plugin add cocoon-plugin-ads-android-adcolony; 
	cordova plugin add cocoon-plugin-ads-ios-mopub-admob;
	cordova plugin add cocoon-plugin-ads-ios-mopub-charboost;
	cordova plugin add cocoon-plugin-ads-ios-mopub-millennial;
```

### In-App Purchases

After the cordova exportation and the creation of the project, one of the following plugins are needed, depending on the Store you want to use. 

If you are using the CLI, copy and paste the command for installing the plugin in your project. 

If you are using the new Cocoon.io cloud compiler, select the plugin id from the plugin list in the project configuration and the plugin will be intalled automatically. 

#### Google Play 
```
	cordova plugin add cocoon-plugin-inapps-android-googleplay;
```
#### Amazon App Store 
```
	cordova plugin add cocoon-plugin-inapps-android-amazon;
```
#### Apple App Store
```
	cordova plugin add cocoon-plugin-inapps-ios-appstore;
```
### Native Share

After the cordova exportation and the creation of the project, it is required to install the following plugin for cordova. 

If you are using the CLI, copy and paste the command for installing the plugin in your project. 

If you are using the new Cocoon.io cloud compiler, select the plugin id from the plugin list in the project configuration and the plugin will be intalled automatically. 

```
	cordova plugin add cocoon-plugin-share;
```
### Cocoon Canvas+

No additional plugins are required after exportation unless the sharing methods are used. If so, please, install the [Native share plugin](#native-share-2). 

### Social integration

After the cordova exportation and the creation of the project, one of the following plugins are needed, depending on the Social Service you want to use. 

If you are using the CLI, copy and paste the command for installing the plugin in your project. 

If you are using the new Cocoon.io cloud compiler, select the plugin id from the plugin list in the project configuration and the plugin will be intalled automatically. 

#### Game Center
```
	cordova plugin add cocoon-plugin-social-ios-gamecenter;
```
#### Google Play Games
```
	cordova plugin add cocoon-plugin-social-android-googleplaygames --variable APP_ID=the_app_id;
```
As you can see, an additional parameter is required: 

* **APP_ID:** The id provided by google play games. 

#### Facebook

Work in progress.

## Important information to take into account 

You can use these plugins in Cocoon.io cloud compiler or using the CLI. They won't work in the old compiler or inside Construct2 without exportation. 

## Need help?

Visit [our help center](https://support.ludei.com).

## Changelog

### Jul 24, 2015
* UserID, UserName and UserImage expressions added to Google Play Games.
* RequestImage action added to Google Play Games. It is necessary to call it first for using the UserImage expression. 

### Jul 17, 2015
* Plugins renamed to "Cocoon". 

### Jul 15, 2015
* Fix for the preview added. 

### Jun 24, 2015
* Atomic plugins for Social integration added (Game Center and Google Play Games).
* Webdialog, Device, App and Utils method added in Cocoon Canvas+ plugin. 

### Jun 22, 2015
* Atomic plugins for Native share added. 
* Cocoon Canvas+ legacies added (Keyboard, open URL, exit, confirm, capture screen,...). 

### May 28, 2015
* Common folder removed, no longer required. 

### May 25, 2015
* Repository moved to CocoonIO.
* Adcolony adapter for iOS added. 

### Apr 14, 2015
* Purchase events fixed for InApps.
* Demo for InApps added. 

### Mar 18, 2015
* Atomic Plugins for InApps added. 
* Supported Stores: Google Play, Amazon App Store and Apple App Store.

### Mar 11, 2015
* Demo for Ads added. 

### Mar 06, 2015
* Atomic Plugins for Ads added. 
* Supported Ad Services: Mopub and Admob. 

# License

Mozilla Public License, version 2.0

Copyright (c) 2015 Ludei 

See [`MPL 2.0 License`](LICENSE)


