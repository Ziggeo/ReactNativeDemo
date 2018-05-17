//
//  ZiggeoConnect.h
//
//  Copyright (c) 2015 Ziggeo Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ZiggeoApplication.h"

@interface ZiggeoConnect : NSObject {
    Ziggeo* _application;
}

- (id) initWithApplication:(Ziggeo*)application_;
@property (nonatomic) NSString* serverAuthToken;
@property (nonatomic) NSString* clientAuthToken;

- (NSURLSessionTask*) requestWithMethod:(NSString*)method Path:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSData *data, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) backgroundUploadWithPath:(NSString*)path Data:(NSDictionary*)data identifier:(NSString*)identifier File:(NSString*)file Callback:(void (^)(NSData *data, NSURLResponse *response, NSError *error))callback Progress:(void (^)(int totalBytesSent, int totalBytesExpectedToSend))progress;

- (NSURLSessionTask*) requestStringWithMethod:(NSString*)method Path:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSString *string, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) requestJSONWithMethod:(NSString*)method Path:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSDictionary *jsonObject, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) requestJSONArrayWithMethod:(NSString*)method Path:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSArray *jsonArray, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) getWithPath:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSData *data, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) getStringWithPath:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSString *string, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) getJsonWithPath:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSDictionary *jsonObject, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) getJsonArrayWithPath:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSArray *jsonArray, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) postWithPath:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSData *data, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) postRawDataWithPath:(NSString*)path Data:(NSData*)data params:(NSDictionary*)params Callback:(void (^)(NSData *data, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) postJsonWithPath:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSDictionary *jsonObject, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) deleteWithPath:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSData *data, NSURLResponse *response, NSError *error))callback;

- (NSURLSessionTask*) deleteJsonWithPath:(NSString*)path Data:(NSDictionary*)data Callback:(void (^)(NSDictionary *jsonObject, NSURLResponse *response, NSError *error))callback;

- (void) appWakeupSignalTaskComplete:(NSString*)sessionID;

- (NSURLSessionTask*) addSessionData:(NSDictionary*)data path:(NSString*)path callback:(NSURLSessionTask* (^)(NSDictionary* dataWithSessionData))callback;


@end
