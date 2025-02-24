import React from 'react'
import { CircleSnail } from 'react-native-progress'
import { H4, View } from 'tamagui'

export function LoadingImportComponent() {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <CircleSnail size={64} color={['#a466ffbf']} />
      <H4 fontWeight={600} marginTop="$7" marginBottom="$4">
        Creating your signer...
      </H4>
      <H4 fontWeight={600} color="$textSecondaryLight">
        Verifying address...
      </H4>
    </View>
  )
}
