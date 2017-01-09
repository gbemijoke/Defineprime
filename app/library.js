module.exports = {
 
 getPrime2: function (inputval)
{
  var outputval=[];
  for(i=2;i<=inputval;i++)
  {
      var isPrime=true;
      for(j=2;j<=Math.pow(i,0.5);j++)
      {
        if(i%j==0)
        {
          isPrime=false;
          break;
        }
      }
      if(isPrime==true)
      {
        outputval.push(i);
      }
  }
  return outputval;
}

}
