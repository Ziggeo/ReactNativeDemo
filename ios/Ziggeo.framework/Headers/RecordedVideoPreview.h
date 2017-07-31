//
//  RecordedVideoPreview.h
//  Ziggeo
//
//  Created by alex on 08/04/16.
//  Copyright © 2016 Ziggeo. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol VideoPreviewDelegate
- (void)retake;
- (void)upload:(NSURL*)fileToUpload;
@end

@protocol VideoPreviewProtocol
@property (nonatomic) NSURL* videoURL;
@property (nonatomic) id<VideoPreviewDelegate> previewDelegate;
@end


@interface RecordedVideoPreview : UIViewController <VideoPreviewProtocol>
@property (weak, nonatomic) IBOutlet UIButton *playPauseButton;
@property (weak, nonatomic) IBOutlet UIView *videoPlaceholder;
@property (nonatomic) NSURL* videoURL;
@property (nonatomic) id<VideoPreviewDelegate> previewDelegate;
@end
