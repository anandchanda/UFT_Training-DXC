Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").WaitProperty "innertext", "OUR PRODUCTS", 10000 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf8.xml_;_

Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("buy_now").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("buy now")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("p_Qty", dtGlobalSheet)
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("CartItems").Highlight @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("RemCartItems")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("CartItems").Output CheckPoint("2")
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("RemCartItems").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement 2")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf6.xml_;_

foo = 1

 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("CartItems")_;_script infofile_;_ZIP::ssf9.xml_;_
