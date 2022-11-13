
function main1(){
    let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"

    let episode: number = 4
    
    
    let favoriteDroid: string
    favoriteDroid = 'BB-8'
    
    
    
    console.log(message)
    
    console.log("This is episode "+4);
    episode = episode+1
    console.log("Next episode is "+episode);
    
    console.log("My favorite droid is "+favoriteDroid);
    
    let isEnoughToBeatMF = function(parsecs: number): boolean {
        return parsecs < 12
    }
    
    let distance = 11
    
    console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`);
    
    let call = (name: string) => console.log(`Do you copy, ${name}?`)
    
    call('R2')
    
}

main1()
