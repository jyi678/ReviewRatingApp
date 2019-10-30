/****** Object:  Table [dbo].[ReviewRating]    Script Date: 2019-10-30 12:05:48 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ReviewRating](
	[ID] [int] NULL,
	[Name] [nvarchar](50) NULL,
	[ReviewText] [nvarchar](250) NULL,
	[RATINGTYPE] [nvarchar](50) NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[ReviewRating]  WITH CHECK ADD  CONSTRAINT [CK_ReviewRating_RateType] CHECK  (([RATINGTYPE]='Needs Improvement' OR [RATINGTYPE]='Moderate' OR [RATINGTYPE]='Excellent'))
GO

ALTER TABLE [dbo].[ReviewRating] CHECK CONSTRAINT [CK_ReviewRating_RateType]
GO

