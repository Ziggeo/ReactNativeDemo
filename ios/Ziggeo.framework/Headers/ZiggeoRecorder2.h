//
//  ZiggeoRecorder2.h
//  Ziggeo
//
//  Created by alex on 07/04/16.
//  Copyright © 2016 Ziggeo. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "RecordedVideoPreview.h"
#import "ZiggeoApplication.h"
@import AVFoundation;

@protocol ZiggeoRecorder2Delegate <NSObject>
-(void) ziggeoRecorderDidCancel;
@end

@interface ZiggeoRecorder2 : UIViewController <VideoPreviewDelegate>

- (void)retake;
- (void)upload:(NSURL*)fileToUpload;

@property (nonatomic) UIViewController<VideoPreviewProtocol>* videoPreview;
@property (nonatomic) bool coverSelectorEnabled;
@property (nonatomic) bool cameraFlipButtonVisible;
@property (nonatomic) bool useLiveStreaming;
@property (nonatomic) UIImagePickerControllerCameraDevice cameraDevice;
@property (nonatomic) id<ZiggeoRecorder2Delegate> recorderDelegate;
@property (nonatomic) NSDictionary* extraArgsForCreateVideo;
-(id) initWithZiggeoApplication:(Ziggeo*)ziggeo;
-(id) initWithZiggeoApplication:(Ziggeo*)ziggeo videoToken:(NSString*)videoToken;

@end
