//
//  ZiggeoConfig.h
//
//  Copyright (c) 2015 Ziggeo Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface ZiggeoConfig : NSObject

@property (strong, nonatomic) NSString *server_api_url;
@property (strong, nonatomic) NSString *cdn_api_url;
@property (strong, nonatomic) NSString *wowza_url;

-(id)initWithToken:(NSString*)token;

@end
