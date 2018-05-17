//
//  ZiggeoPlayerController.h
//  Ziggeo
//
//  Copyright (c) 2015 Ziggeo Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ZiggeoApplication.h"
@import AVFoundation;

@interface ZiggeoPlayer : AVPlayer

-(id) initWithZiggeoApplication:(Ziggeo*)ziggeo videoToken:(NSString*)token;

+(void)createPlayerWithAdditionalParams:(Ziggeo*)ziggeo videoToken:(NSString*)token params:(NSDictionary*)params callback:(void (^)(ZiggeoPlayer* player))callback;
+(void)createPlayerWithServerAuthToken:(Ziggeo*)ziggeo videoToken:(NSString*)token authToken:(NSString*)authToken callback:(void (^)(ZiggeoPlayer* player))callback;
+(void)createPlayerWithClientAuthToken:(Ziggeo*)ziggeo videoToken:(NSString*)token authToken:(NSString*)authToken callback:(void (^)(ZiggeoPlayer* player))callback;

@end
