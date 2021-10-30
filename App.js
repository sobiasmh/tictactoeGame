import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';




export default function App() {
  const [board,setBoard]  = useState(["","","","","","","","",""]);
  const [player,setPlayer] = useState("X")
  const [getwinner, SetWinner] =  useState("")
  const markButton = (position) =>{
    if(!board[position]){
    let temp = [...board]
    temp[position] = player
    setBoard(temp)
    if(player === 'X'){
      setPlayer('O')
    }
    else{
      setPlayer('X')
    }
  }
}
  const winnerCheck = (box) =>{
    const wins = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i =0; i<wins.length;i++){
      const [a,b,c] = wins[i]
      if(box[a] && box[a] === box[b] && box[a] === box[c]){
        return box[a]
      }
      
    }
    return null;
  }
  const winnerPlayer=() =>{
    const winner = winnerCheck(board)
    if(winner === 'X'){
      alert("Player X Won")
      setBoard("")
    }
    else if (winner==='O'){
      alert("Player O Won")
      setBoard("")
    }
  }
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <Text style={[styles.playerText, { backgroundColor: player === 'X' ? "#74c69d" : "#2c7da0"}]}>Player {player}'s turn</Text>

      <View style={styles.board}>

      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
        <Pressable style={styles.boxStyle} onPress={()=>markButton(0)}>
         {board[0]==='X' && <Text style={styles.playerText2}>X</Text>}
         {board[0]==='O' && <Text style={styles.playerText2}>O</Text>}


        </Pressable>
        <Pressable style={styles.boxStyle} onPress={()=>markButton(1)}>
        {board[1]==='X' && <Text style={styles.playerText2}>X</Text>}
        {board[1]==='O' && <Text style={styles.playerText2}>O</Text>}


        </Pressable>
        <Pressable style={styles.boxStyle} onPress={()=>markButton(2)}>
        {board[2]==='X' && <Text style={styles.playerText2}>X </Text>}
        {board[2]==='O' && <Text style={styles.playerText2}>O </Text>}

        </Pressable>
      </View>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
        <Pressable style={styles.boxStyle} onPress={()=>markButton(3)}>
        {board[3]==='X' && <Text style={styles.playerText2}>X</Text>}
        {board[3]==='O' && <Text style={styles.playerText2}>O</Text>}


        </Pressable>
        <Pressable style={styles.boxStyle} onPress={()=>markButton(4)}>
        {board[4]==='X' && <Text style={styles.playerText2}>X</Text>}
        {board[4]==='O' && <Text style={styles.playerText2}>O </Text>}

        </Pressable>
        <Pressable style={styles.boxStyle} onPress={()=>markButton(5)}>
        {board[5]==='X' && <Text style={styles.playerText2}>X </Text>}
        {board[5]==='O' && <Text style={styles.playerText2}>O</Text>}


        </Pressable>
      </View>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
        <Pressable style={styles.boxStyle} onPress={()=>markButton(6)}>
        {board[6]==='X' && <Text style={styles.playerText2}>X </Text>}
        {board[6]==='O' && <Text style={styles.playerText2}>O</Text>}
        </Pressable>
        <Pressable style={styles.boxStyle} onPress={()=>markButton(7)}>
        {board[7]==='X' && <Text style={styles.playerText2}>X </Text>}
        {board[7]==='O' && <Text style={styles.playerText2}>O </Text>}
        </Pressable>
        <Pressable style={styles.boxStyle} onPress={()=>markButton(8)}>
        {board[8]==='X' && <Text style={styles.playerText2}>X</Text>}
        {board[8]==='O' && <Text style={styles.playerText2}>O</Text>}
        </Pressable>
      </View>
      {winnerPlayer()}

      </View>


      <Button title="New Game" color="#14213d" onPress={()=> setBoard("") } >

        
      </Button>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board:{
    borderWidth: 3,
    paddingTop: 25,
    marginBottom: 20,
    backgroundColor: '#e5e5e5',
    height: 290,
    width: 321,
    borderColor: '#fca311',
    
  },
  playerText:{
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 1.5,
    color: 'white',
    margin:10
  },
  playerText2:{
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',

  },
  boxStyle:{
    backgroundColor: '#14213d',
    width: 50,
    height: 50,
    margin: 10,
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 5,
    
  }
});
