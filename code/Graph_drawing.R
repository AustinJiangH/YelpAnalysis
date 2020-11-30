setwd("D:/Desktop/UW/628/M3")
library('ndjson')
library(stringr)
raw=stream_in('raw.json')
city=stream_in('business_city_Chinese.json')

################################################# general EDA

par(mfrow=c(1,1))
summary(raw$stars)

reviewlength=str_count(raw$text,boundary('word'))
h=lm(raw$stars~reviewlength)
summary(h)
rating=c()
times=c()
s=seq(1,1000,50)
for(i in 1:(length(s)-1)){
  rating[i]=mean(raw$stars[which(reviewlength>=s[i]&reviewlength<s[i+1])])
  times[i]=sum(reviewlength>=s[i]&reviewlength<s[i+1])
}
plot(s[-length(s)],rating,ylim=c(1.5,5),pch=16,col='coral',
     xlab='Review Length(words)',ylab='Stars(rating)',
     main='Correlation between review length and ratings')
text(s[-length(s)],rating+0.1,times,cex=0.7,col='dimgrey')
abline(h$coefficients,col='darkred',lty=3)

################################################# staple

wordlist=c('bun | bao zi','dumpling','roll','rice',
           'soup','noodle','rangoon','stick')
u=lapply(wordlist,function(x){grep(x,raw$text,ignore.case=TRUE)})
names(u)=wordlist

M=matrix(nrow=5)
for(i in 1:length(u)){
  M=cbind(M,table(raw$stars[u[[i]]]))
}
M=M[,-1]
M=M/as.integer(unname(table(raw$stars)))

par(mfrow=c(2,4))
for(i in 1:length(u)) barplot(M[,i],main=names(u)[i],xlab='Stars')

################################################# dishes

wordlist=c('duck','chicken','beef','shrimp',
           'cabbage','eggplant','tofu','mushroom')
u=lapply(wordlist,function(x){grep(x,raw$text,ignore.case=TRUE)})
names(u)=wordlist

M=matrix(nrow=5)
for(i in 1:length(u)){
  M=cbind(M,table(raw$stars[u[[i]]]))
}
M=M[,-1]
M=M/as.integer(unname(table(raw$stars)))

par(mfrow=c(2,4))
for(i in 1:length(u)) barplot(M[,i],main=names(u)[i],xlab='Stars')

################################################# others

wordlist=c('delivery','parking','take out | take-out','service',
           'tip','pot','authentic','staff')
u=lapply(wordlist,function(x){grep(x,raw$text,ignore.case=TRUE)})
names(u)=wordlist

M=matrix(nrow=5)
for(i in 1:length(u)){
  M=cbind(M,table(raw$stars[u[[i]]]))
}
M=M[,-1]
M=M/as.integer(unname(table(raw$stars)))

par(mfrow=c(2,4))
for(i in 1:length(u)) barplot(M[,i],main=names(u)[i],xlab='Stars')

################################################# regress

stars=city$stars
mo=city$hours.Monday
tu=city$hours.Tuesday
we=city$hours.Wednesday
th=city$hours.Thursday
fr=city$hours.Friday
sa=city$hours.Saturday
su=city$hours.Sunday
week=cbind(mo,tu,we,th,fr,sa,su)
com=matrix(nrow=751,ncol=7)
for(i in 1:7) com[,i]=as.integer(complete.cases(week[,i]))
opendays=rowSums(com)
always=which(opendays==7)
useless=which(opendays==0)
stars=stars[-useless]
opendays=opendays[-useless]
# opendays=ifelse(opendays==7,yes=1,no=0)

l=lm(stars~opendays)
summary(l)