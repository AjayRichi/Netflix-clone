.selectedMovie{
    color: white;
    object-fit: contain;
    height: fit-content;
    width: 100%;
}

.selectedMovie-content{
    padding-top: 30px;
    height: 400px;
    background-image: linear-gradient(to left,transparent, rgba(37,37,37,0.61),#111);
    width: 100%;
}
.selectedMovie-title{
    font-size: 1.6rem;
    font-weight: 800;
    display: flex;
    padding-bottom: 20px;
}

.left{
    float: left
}

.right{
    float: right
}
.youtube{
    width: 450px;
    height: 300px;
    margin-right: 50px
}

.selectedMovie-description{
    font-weight: 700;
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    padding-bottom: 0rem;
    font-size: 0.9rem;
    max-width: 450px;
    height: 80px;
}

.selectedMovie-button{
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(51, 52, 51, 0.5)
}

.selectedMovie-button:hover{
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
}

.selectedMovie-image{
    background-size: cover;
     background-position-x: right
}

@media only screen and (max-width: 600px) {
    .selectedMovie{
        height: fit-content;
    }
    .youtube{
        margin-left: 9px;
        width: 90%;
        height: 200px;
        margin-bottom: 0px;
        padding-top: 10px
    }
    
    .selectedMovie-content{
        padding-left: 20px;
        width: fit-content;
        padding-top: 10px;
        height: fit-content;
        padding-bottom: 30px;
    }
    .selectedMovie-title{
        padding-top: 1em;
        font-size: 1rem;
        font-weight: 700;
        padding-bottom: 1rem;
    }
    .trailer-title{
        padding-left: 8%;
        font-size: 1rem;
        font-weight: 700;
        padding-top: 0.8em;
        padding-bottom: 0.9em;
        
    }
    .selectedMovie-description{
        font-weight: 500;
        padding-top: 0.4rem;
        font-size: 0.7rem;
        width: fit-content;
    }
    .selectedMovie-button{
        font-weight: 400;
        border-radius: 0vw;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-right: 0.5rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
    }
   
    .left{
        float: none;
    }
    .right{
        float: none;
        padding-top: 10px
    }

    
    
    
}
