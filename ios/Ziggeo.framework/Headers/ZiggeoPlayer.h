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

@end
