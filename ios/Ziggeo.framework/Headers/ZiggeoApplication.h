//
//  Ziggeo.h
//
//  Copyright (c) 2015 Ziggeo Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
@class ZiggeoConfig;
@class ZiggeoConnect;
@class ZiggeoVideos;

@interface Ziggeo : NSObject {
    ZiggeoConfig* _configObj;
    ZiggeoConnect* _connectObj;
    ZiggeoVideos* _videosObj;
}
    
@property (strong, nonatomic) NSString *token;
@property (nonatomic) bool enableDebugLogs;

- (id)initWithToken:(NSString *)token_;
- (void)log:(NSString*)message;
- (void)logError:(NSString*)message;

- (ZiggeoConfig*)config;

- (ZiggeoConnect*)connect;

- (ZiggeoVideos*)videos;

@end
