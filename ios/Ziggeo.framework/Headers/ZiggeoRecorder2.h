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
@optional
-(void) ziggeoRecorderDidCancel;
@optional
-(void) ziggeoRecorderCurrentRecordedDurationSeconds:(double)seconds;
@end

typedef enum : NSUInteger {
    LowQuality,
    MediumQuality,
    HighestQuality,
} RecordingQuality;

@interface ZiggeoRecorder2 : UIViewController <VideoPreviewDelegate>

- (void)retake;
- (void)upload:(NSURL*)fileToUpload;

@property (nonatomic) UIViewController<VideoPreviewProtocol>* videoPreview;
@property (nonatomic) bool coverSelectorEnabled;
@property (nonatomic) bool sendImmediately;
@property (nonatomic) bool cameraFlipButtonVisible;
@property (nonatomic) bool useLiveStreaming;
@property (nonatomic) bool controlsVisible;
@property (nonatomic) UIImagePickerControllerCameraDevice cameraDevice;
@property (nonatomic) RecordingQuality recordingQuality;
@property (nonatomic) id<ZiggeoRecorder2Delegate> recorderDelegate;
@property (nonatomic) NSDictionary* extraArgsForCreateVideo;
@property (nonatomic) double maxRecordedDurationSeconds;
@property (nonatomic) double autostartRecordingAfterSeconds;

-(id) initWithZiggeoApplication:(Ziggeo*)ziggeo;
-(id) initWithZiggeoApplication:(Ziggeo*)ziggeo videoToken:(NSString*)videoToken;

@end
