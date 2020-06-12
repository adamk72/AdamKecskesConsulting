# Case Studies of Simple Changes with Large Impacts

Sometimes all it takes is a minor change in a system to make a huge impact on how effective or friendly that system becomes. I talk about complex changes here: https://kecskes.net/k/complexCases.

## Automating Reporting

I have two stories that demonstrate the power of making minor changes:

### Improving the Spreadsheet

In one organization, I worked on a team of five technical specialist who did weekly reporting and analysis. I was the last person to join the group, but I had seen their process in full and understood how it worked, and it was slow.

It took one person a full working day to complete the import of data, do the analysis, and present the report. At that time, it was 8 x 4 = 32 hours of work to get the four reports done, and this time was growing.

Before I came into the group, I was already examing ways of improving the system without having too much of an impact on the rest of the organization. The answer was in automating more of the spreadsheet.

Though a bit of after-hours work, I added a few macros and formulas to the spreadsheet to heavily change the behavior. Gone where a lot of the column and row manipulation and instead it was just a simple matter of importing the data and pressing some buttons.

The result was a dramatic improvement in performance. If I had joined the group and not made the changes, it would have been 8 x 5 = 40 hours of person-hours to get the work down each week. With my changes, the analysis dropped to under half an hour: .5 x 5= 2.5 hours of work, a 68% improvement in performance.

## Automating the Reporting

In another organization, we had a database analyst who would pull and run performance reports of a mobile application we had on the market. It included several details, including database response time, customer conversion, and more.

It took him about 5 hours to do the work, and because he was in a different time-zone (Syndey, Australia), we didn't always have access to those reports. In fact, at the time, despite the reports being periodically generated, the data changed so fast that it was useless.

When I came to the organization, I wrote a simple awk script to pull the data from a downloaded .csv file, do the analysis, and format the results. I had the results emailed out and informed everyone of what simple steps to generate the report on their own.

The result was the management team had up-to-date information in near real-time (the database itself was large and inefficient -- another story for another time -- and took time to download as a .cvs file), and could make better decisions as a result.

I had other options rather than using an archaic text manipulation like awk, but those would have incurred additional cost and complexity, including a learning curve, plus many choices needed a lot of database coding to fix some of the basic issues the database had. Awk was free, easily accessed and available, and simple to implement. Any decent scripting language like Python or Ruby could have done equally as well.

## Conclusion

I have many more examples I could provide, ranging from more spreadsheets and database fixes, to even more simple fixes, such as improving email etiquette or tweaking an organization's workflows.

These two demonstrate that not much has to be changed, nor do the changes have to be massive to have an outsized effect. If you'd like to hear about more complex changes and the exponential impact such changes can have, read about it here: https://kecskes.net/k/complexCases.
