import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// ข้อมูลสำหรับแสดงในส่วน Continue Watching
const continueWatching = [
  {
    id: '1',
    title: 'ดูดอะไรอยู่',
    subtitle: 'เนื้อหาการให้ข้อมูลเกี่ยวกับ...',
    image: require('./assets/continue1.png'),
  },
  {
    id: '2',
    title: 'เลือกได้ ไม่ใช้บุหรี่ไฟฟ้า',
    subtitle: 'ผลกระทบของบุหรี่ไฟฟ้าต่อ...',
    image: require('./assets/continue2.png'),
  },
];

// ข้อมูลสำหรับแสดงในส่วน Recommended Courses
const recommendedCourses = [
  {
    id: '1',
    title: 'คู่มือรู้เท่าทันบุหรี่ไฟฟ้า',
    image: require('./assets/course1.png'),
  },
  {
    id: '2',
    title: 'ไขข้อเท็จจริงบุหรี่ไฟฟ้า',
    image: require('./assets/course2.png'),
  },
];

export default function App() {
  return (
    // Container หลักของแอป
    <View style={styles.container}>
      {/* เนื้อหาหลัก เลื่อนขึ้นลงได้ */}
      <ScrollView style={styles.content}>
        {/* ส่วนหัว */}
        <View style={styles.header}>
          <Text style={styles.welcome}>
            Welcome <Text style={styles.username}>Wanita Sihat Pattani</Text>
          </Text>
          {/* ไอคอนแจ้งเตือน */}
          <View style={styles.notification}>
            <Ionicons name="notifications-outline" size={24} />
            {/* Badge แสดงจำนวนแจ้งเตือน */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>25</Text>
            </View>
          </View>
        </View>

        {/* ช่องค้นหา */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} />
          <TextInput
            placeholder="Search Here"
            style={styles.searchInput}
          />
        </View>

        {/* หมวดหมู่ */}
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryBtn}><Text>Stop Vape</Text></TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn}><Text>Safe Lungs</Text></TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn}><Text>Youth Against</Text></TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn}><Text>{'>>>'}</Text></TouchableOpacity>
        </View>

        {/* ส่วน Continue Watching */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Continue Watching</Text>
          <Text>See All</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={continueWatching}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            </View>
          )}
        />

        {/* ส่วน Recommended Courses */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended Courses</Text>
          <Text>See All</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recommendedCourses}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          )}
        />
      </ScrollView>
      {/* แถบนำทางด้านล่าง */}
      <View style={styles.bottomNav}>
        <Ionicons style={styles.bottomNavIcon} name="home" size={24} />
        <Ionicons style={styles.bottomNavIcon} name="search" size={24} />
        <Ionicons style={styles.bottomNavIcon} name="notifications-outline" size={24} />
        <Ionicons style={styles.bottomNavIcon} name="person-outline" size={24} />
      </View>
    </View>
  );
}

// กำหนดสไตล์ของแต่ละส่วนในแอป
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' }, // พื้นหลังขาว เต็มจอ
  content: { flex: 1, padding: 16 }, // เนื้อหาหลัก มี padding
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 60, alignItems: 'center' }, // ส่วนหัว
  welcome: { fontSize: 22, fontWeight: 'bold' }, // ข้อความ Welcome
  username: { fontWeight: 'semibold',color: 'darkblue', fontSize: 20, }, // ชื่อผู้ใช้
  notification: { position: 'relative' }, // กล่องแจ้งเตือน
  badge: {
    position: 'absolute', top: -5, right: -5, backgroundColor: 'red', borderRadius: 10,
    paddingHorizontal: 4, paddingVertical: 1,
  }, // Badge แจ้งเตือน
  badgeText: { color: '#fff', fontSize: 10 }, // ตัวเลขใน badge
  searchContainer: { flexDirection: 'row', marginTop: 16, marginBottom:16, paddingLeft: 8, borderWidth: 1, borderRadius: 25, alignItems: 'center' }, // กล่องค้นหา
  searchInput: { marginLeft: 8, flex: 1 }, // ช่องกรอกค้นหา
  categories: { flexDirection: 'row', flexWrap: 'wrap' }, // หมวดหมู่
  categoryBtn: { backgroundColor: '#eee', paddingHorizontal: 12, paddingVertical: 6, margin: 4, borderRadius: 16 }, // ปุ่มหมวดหมู่
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, marginTop: 16 }, // หัวข้อแต่ละ section
  sectionTitle: { fontWeight: 'bold', fontSize: 16 }, // ชื่อ section
  card: { width: 180, marginHorizontal: 8 }, // การ์ดเนื้อหา
  cardImage: { width: '100%', height: 120, borderRadius: 8 }, // รูปภาพในการ์ด
  cardTitle: { fontWeight: 'bold', marginTop: 4 }, // ชื่อเรื่องในการ์ด
  cardSubtitle: { fontSize: 12, color: '#555' }, // คำอธิบายย่อยในการ์ด
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 25,  paddingTop: 25, backgroundColor: '#EA580C'}, // แถบนำทางล่าง
  bottomNavIcon: { color: '#fff' }, // ไอคอนในแถบนำทางล่าง
});