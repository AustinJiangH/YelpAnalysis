setwd("D:/Desktop/UW/628/M3")
library('ndjson')
raw=stream_in('raw.json')
wordlist=c('chicken','beef','pork','fish',
           'noisy','quiet','modern','old',
           'take out','parking','servant','tips')
u=lapply(wordlist,function(x){grep(x,raw$text)})
names(u)=wordlist

M=matrix(nrow=5)
for(i in 1:length(u)){
  M=cbind(M,table(raw$stars[u[[i]]]))
}
M=M[,-1]
M=M/as.integer(unname(table(raw$stars)))

par(mfrow=c(3,4))
for(i in 1:length(u)) barplot(M[,i],main=names(u)[i],xlab='Stars')

