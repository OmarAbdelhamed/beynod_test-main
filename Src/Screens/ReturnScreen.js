import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'

const ReturnScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: Dimensions.get('screen').height / 15,
        paddingHorizontal: Dimensions.get('screen').width / 22,
        backgroundColor: 'white',
        justifyContent: 'space-between'


      }}
    >
      <View>
        <ComponentsHeader
          title={'Return / Exchange'}
        />
        <ScrollView
                    nestedScrollEnabled={true}
        
        >
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              marginBottom: 24,
              marginVertical: 12,
              lineHeight: 20
            }}
          >
            Eligibility:
            Items must be returned within 30 days of purchase, unused and in original condition with tags and packaging intact.
            Certain items like perishables, personalized, or digital downloads may not be eligible unless defective.
            Initiating Returns/Exchanges:
            Contact customer support with order number and reason for return/exchange.
            Follow instructions provided by our team.
            Process:
            Pack securely, include accessories, and affix provided return label (if applicable).
            Upon receipt, we'll inspect and process refunds within 7-10 business days.
            Exchanges:
            Subject to availability; if unavailable, refund will be issued.
            Non-Returnable Items:
            Perishables, personalized items, digital downloads, and damaged due to misuse.
            Damaged Items:
            Contact us immediately for assistance.
            Final Sale Items:
            Not eligible for return unless damaged or defective.
            Policy Updates:
            Subject to change without notice.
            Thank you for choosing Beyond. For further assistance, contact us at support@beyond.com.

          </Text>
        </ScrollView>


      </View>


    </View>
  )
}

export default ReturnScreen