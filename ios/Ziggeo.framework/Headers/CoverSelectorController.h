//
//  CoverSelectorController.h
//  Ziggeo
//
//  Copyright (c) 2015 Ziggeo Inc. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ZiggeoApplication.h"

@protocol CoverSelectorDelegate <NSObject>
-(void) coverSelectedForPath:(NSString*)videoPath image:(UIImage*)image;
@end

@interface CoverSelectorController : UIViewController<UITableViewDelegate, UITableViewDataSource>

@property (weak) id<CoverSelectorDelegate> delegate;

@property (weak, nonatomic) IBOutlet UITableView *tableView;

-(id) initWithSourceVideoPath:(NSString*)path;

@end
