


import React from 'react'


const Input= ({label, value, onChangeText, placeholder, secureTextEntry})  =>  {

return(
 <View style={styles.container}>
 <Text>Label</Text>
 <TextInput
 onChangetext={onChangeText}
 placeholder={placeholder}
 style={styles.input}
 secureTextEntry={secureTextEntry}
 value={value}


/>
</View>

)
}
