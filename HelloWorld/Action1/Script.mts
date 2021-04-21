
SystemUtil.CloseProcessByName "iexplore.exe"
SystemUtil.Run "iexplore.exe", "https://advantageonlineshopping.com"
For sendFeedback = 1 To 4 Step 1
		
	'Browser("Advantage Shopping").Page("Advantage Shopping").Link("Contact Us").Click

	'Browser("Advantage Shopping").Page("Advantage Shopping").Link("helpLink").Click
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("Contact Us").Click
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs"). _
		Select "#" & sendFeedback
	wait 2
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("productListboxContactUs"). _
		Select "#" & sendFeedback
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs").Set "2@2.com"
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs").Set "UFT is Great"
	Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send_btnundefined").Click
	wait 3
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING").Check CheckPoint("CONTINUE SHOPPING")
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING").Click
	
next
SystemUtil.CloseProcessByName "iexplore.exe"
 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING")_;_script infofile_;_ZIP::ssf8.xml_;_
