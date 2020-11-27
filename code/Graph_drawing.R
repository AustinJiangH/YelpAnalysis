setwd("D:/Desktop/UW/628/M3")
library('ndjson')
raw=stream_in('raw.json')

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