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

- (id)initWithToken:(NSString *)token_;


- (ZiggeoConfig*)config;

- (ZiggeoConnect*)connect;

- (ZiggeoVideos*)videos;

@end
