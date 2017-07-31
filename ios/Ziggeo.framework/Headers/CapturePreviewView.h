//
//  PreviewView.h
//  Ziggeo
//
//  Created by alex on 07/04/16.
//  Copyright © 2016 Ziggeo. All rights reserved.
//

#import <UIKit/UIKit.h>


@import UIKit;

@class AVCaptureSession;

@interface CapturePreviewView : UIView

@property (nonatomic) AVCaptureSession *session;

@end
