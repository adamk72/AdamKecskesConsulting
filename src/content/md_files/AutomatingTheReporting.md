# Automating the Reporting

## A simple case study in automation of reports

In one company I worked for, we had a database analyst who would pull and run performance reports of a mobile application we had on the market. It included a number of details, including database response time, customer conversion, and more.

It took him about 5 hours to do the work, and because he was in a different time-zone (Sydney, Australia), we didn't always have access to those reports in a timely manner. In fact, at the time, despite the reports being periodically generated, the data changed so fast that it was basically useless.

When I came to the organization and discovered the issue, I wrote a simple awk script to pull the data from a downloaded .csv file, do the analysis, and format the results. I had the results emailed out and informed everyone of what simple steps to generate the report on their own.

The end result was the management team had up-to-date information in near real-time (the database itself was large and inefficient -- another story for another time -- and took time to download as a .cvs file), and could make better decisions as a result.

Watch out for what takes so much time that the data is no longer useful by the time the report come out. A business should not be run on old data.
