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
@optional
-(void) luxMeter:(double)luminousity;
@optional
-(void) audioMeter:(double)audioLevel;
@optional
-(void) faceDetected:(int)faceID rect:(CGRect)rect;
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
@property (nonatomic) bool showFaceOutline;
@property (nonatomic) bool showLightIndicator;
@property (nonatomic) bool showSoundIndicator;
@property (nonatomic) UIImagePickerControllerCameraDevice cameraDevice;
@property (nonatomic) RecordingQuality recordingQuality;
@property (nonatomic) id<ZiggeoRecorder2Delegate> recorderDelegate;
@property (nonatomic) NSDictionary* extraArgsForCreateVideo;
@property (nonatomic) double maxRecordedDurationSeconds;
@property (nonatomic) double autostartRecordingAfterSeconds;
@property (nonatomic) AVLayerVideoGravity videoGravity;

-(id) initWithZiggeoApplication:(Ziggeo*)ziggeo;
-(id) initWithZiggeoApplication:(Ziggeo*)ziggeo videoToken:(NSString*)videoToken;

@end
