//
//  ZiggeoRecorder.h
//  Ziggeo
//
//  Copyright (c) 2015 Ziggeo Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ZiggeoApplication.h"
#import "CoverSelectorController.h"
@import UIKit;

@protocol ZiggeoRecorderDelegate <NSObject>
-(void) ziggeoRecorderDidCancel;
@end

@interface ZiggeoRecorder : UIImagePickerController<UIImagePickerControllerDelegate,UINavigationControllerDelegate,CoverSelectorDelegate>

-(id) initWithZiggeoApplication:(Ziggeo*)ziggeo;
-(id) initWithZiggeoApplication:(Ziggeo*)ziggeo videoToken:(NSString*)videoToken;
@property (nonatomic) bool coverSelectorEnabled;
@property (nonatomic) bool cameraFlipButtonVisible;
@property (nonatomic) id<ZiggeoRecorderDelegate> recorderDelegate;
-(void) selectExistingVideo;

@end
