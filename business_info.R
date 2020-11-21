install.packages("rjson")
install.packages("jsonlite")
library(rjson)
library(jsonlite)

data<-jsonlite::stream_in(file("business_city_Chinese.json"),pagesize = 100)
str(data)
head(data)
colnames(data)
colnames(data$attributes)
head(data$attributes$RestaurantsTableService)
business=data[,c("business_id","name","stars","attributes")]

##RestaurantsTakeOut
x=business$attributes$RestaurantsTakeOut
stars_T=business$stars[x=="True"]
stars_F=business$stars[x=="False"]
stars_T=stars_T[!is.na(stars_T)]
stars_F=stars_F[!is.na(stars_F)]
par(mfrow=c(1,2))
hist(stars_T,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_F,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
par(mfrow=c(1,1))
mean(stars_T)
mean(stars_F)
t.test(stars_T,stars_F)
#The business which do not provide take out have smaller mean stars, and do not have 5 stars.
#But the difference of mean stars is not large. The p-value of t-test=0.865.

##BikeParking
x=business$attributes$BikeParking
stars_T=business$stars[x=="True"]
stars_F=business$stars[x=="False"]
stars_T=stars_T[!is.na(stars_T)]
stars_F=stars_F[!is.na(stars_F)]
par(mfrow=c(1,2))
hist(stars_T,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_F,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
par(mfrow=c(1,1))
mean(stars_T)
mean(stars_F)
t.test(stars_T,stars_F)
#From the plot there is not much difference between two groups. And the p-value=0.22.

##RestaurantsReservations
x=business$attributes$RestaurantsReservations
stars_T=business$stars[x=="True"]
stars_F=business$stars[x=="False"]
stars_T=stars_T[!is.na(stars_T)]
stars_F=stars_F[!is.na(stars_F)]
par(mfrow=c(1,2))
hist(stars_T,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_F,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
par(mfrow=c(1,1))
mean(stars_T)
mean(stars_F)
t.test(stars_T,stars_F)
#From the plot we can find that the restaurants with reservations have larger stars than
#restaurants without reservations. And the p-value=1.95e-06. 
#So the restaurant should provide reservations to improve the stars.

##BusinessAcceptsCreditCards
x=business$attributes$BusinessAcceptsCreditCards
stars_T=business$stars[x=="True"]
stars_F=business$stars[x=="False"]
stars_T=stars_T[!is.na(stars_T)]
stars_F=stars_F[!is.na(stars_F)]
par(mfrow=c(1,2))
hist(stars_T,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_F,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
par(mfrow=c(1,1))
mean(stars_T)
mean(stars_F)
t.test(stars_T,stars_F)
#It is interesting that the restaurants do not accept credit card have higher stars.

##Alcohol
x=business$attributes$Alcohol
stars_none=business$stars[x=="u'none'" | x=="'none'"]
stars_full_bar=business$stars[x=="'full_bar'" | x=="u'full_bar'"]
stars_beer_and_wine=business$stars[x=="'beer_and_wine'" | x=="u'beer_and_wine'"]
stars_none=stars_none[!is.na(stars_none)]
stars_full_bar=stars_full_bar[!is.na(stars_full_bar)]
stars_beer_and_wine=stars_beer_and_wine[!is.na(stars_beer_and_wine)]
par(mfrow=c(1,3))
hist(stars_none,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_beer_and_wine,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_full_bar,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
par(mfrow=c(1,1))
mean(stars_none)
mean(stars_full_bar)
mean(stars_beer_and_wine)
#The restaurants provide only beer and wine have smallest stars.
t.test(stars_none,stars_full_bar)
t.test(stars_none,stars_beer_and_wine)
t.test(stars_beer_and_wine,stars_full_bar)
#The p-value are all>0.05

##HasTV
x=business$attributes$HasTV
stars_T=business$stars[x=="True"]
stars_F=business$stars[x=="False"]
stars_T=stars_T[!is.na(stars_T)]
stars_F=stars_F[!is.na(stars_F)]
par(mfrow=c(1,2))
hist(stars_T,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_F,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
par(mfrow=c(1,1))
mean(stars_T)
mean(stars_F)
t.test(stars_T,stars_F)
#p-value=0.124

##WiFi
x=business$attributes$WiFi
stars_no=business$stars[x=="u'no'" | x=="None" | x=="'no'"]
stars_free=business$stars[x=="u'free'" | x=="'free'"]
stars_paid=business$stars[x=="u'paid'"]
stars_no=stars_no[!is.na(stars_no)]
stars_free=stars_free[!is.na(stars_free)]
stars_paid=stars_paid[!is.na(stars_paid)]
par(mfrow=c(1,3))
hist(stars_no,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_paid,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_free,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
par(mfrow=c(1,1))
mean(stars_no)
mean(stars_paid)
mean(stars_free)
#The restaurants provide paid wifi have obviously smallest stars.
t.test(stars_no,stars_free)
#The restaurants should provide free wifi

##GoodForKids
x=business$attributes$GoodForKids
stars_T=business$stars[x=="True"]
stars_F=business$stars[x=="False"]
stars_T=stars_T[!is.na(stars_T)]
stars_F=stars_F[!is.na(stars_F)]
par(mfrow=c(1,2))
hist(stars_T,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_F,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
par(mfrow=c(1,1))
mean(stars_T)
mean(stars_F)
t.test(stars_T,stars_F)
#p-value=0.02119, the restaurants can provide some kid food or entertainment.

##RestaurantsDelivery
x=business$attributes$RestaurantsDelivery
stars_T=business$stars[x=="True"]
stars_F=business$stars[x=="False"]
stars_T=stars_T[!is.na(stars_T)]
stars_F=stars_F[!is.na(stars_F)]
par(mfrow=c(1,2))
hist(stars_T,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_F,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
par(mfrow=c(1,1))
mean(stars_T)
mean(stars_F)
t.test(stars_T,stars_F)
#p-value = 0.01665. The restaurants without delivery have larger stars.
#Maybe it is because the deliver food taste worse and if it take a long to deliver,
#the customer will get angry and give low stars.
#The restaurant should not provide delivery service.

##WheelchairAccessible
x=business$attributes$WheelchairAccessible
stars_T=business$stars[x=="True"]
stars_F=business$stars[x=="False"]
stars_T=stars_T[!is.na(stars_T)]
stars_F=stars_F[!is.na(stars_F)]
par(mfrow=c(1,2))
hist(stars_T,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_F,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
par(mfrow=c(1,1))
mean(stars_T)
mean(stars_F)
t.test(stars_T,stars_F)
#p-value = 0.7276

##BusinessParking
garage=substr(business$attributes$BusinessParking,12,16)
street=substr(business$attributes$BusinessParking,29,33)
start_T=business$stars[garage=="True" | street=="True"]
start_F=business$stars[garage=="False" & street=="False"]
stars_T=stars_T[!is.na(stars_T)]
stars_F=stars_F[!is.na(stars_F)]
par(mfrow=c(1,2))
hist(stars_T,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
hist(stars_F,breaks=c(0,1,2,3,4,5),xlim=c(0,5))
par(mfrow=c(1,1))
mean(stars_T)
mean(stars_F)
t.test(stars_T,stars_F)
#p-value = 0.7276