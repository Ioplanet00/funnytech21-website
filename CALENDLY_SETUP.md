# Calendly 설정 가이드 (Google Calendar 자동 연동)

## 1단계: Calendly 계정 생성

1. https://calendly.com 접속
2. **Google로 계속하기** 클릭 (choijiwoon1975@gmail.com 계정 사용)
3. 무료 플랜 선택 (Basic - 충분합니다)

## 2단계: Google Calendar 연동

1. Calendly 대시보드 → **Integrations** → **Calendar Sync**
2. **Google Calendar** 선택 → 연결 확인
3. 양방향 동기화 활성화:
   - ✅ Calendly → Google Calendar (예약 자동 추가)
   - ✅ Google Calendar → Calendly (기존 일정 차단)

## 3단계: 이벤트 유형 생성

### 30분 미팅 설정
1. **Event Types** → **+ New Event Type**
2. 설정:
   - Name: `30 Minute Meeting`
   - Duration: 30 minutes
   - Location: Zoom / Google Meet
   - Available hours: 평일 09:00 - 18:00 (KST)

### 1시간 미팅 설정
1. 동일하게 1-hour 버전 생성

## 4단계: 자동 이메일 설정 (소개서 첨부)

### 확인 이메일에 PDF 링크 추가:
1. **Event Types** → 이벤트 선택 → **Notifications**
2. **Confirmation email to invitee** → **Edit**
3. 이메일 본문에 추가:

```
Thank you for booking a meeting with FunnyTech21!

Please review our solution materials before the meeting:
- i-DMS Solution: https://www.funnytech21.com/i-DMS_Real-World_Performance.pdf
- Technical Overview: https://www.funnytech21.com/Safety_Software_First.pdf
- Healthcare Solution: https://www.funnytech21.com/AI_Patient_Monitoring_System.pdf

We look forward to speaking with you!

Best regards,
FunnyTech21 Team
```

## 5단계: 웹사이트 링크 업데이트

현재 웹사이트의 Calendly 링크를 실제 링크로 교체:

**수정 위치:** `index.html` 라인 1433

```html
<!-- 현재 (임시 링크) -->
<a href="https://calendly.com/funnytech21" ...>

<!-- 변경 (본인 실제 링크로 교체) -->
<a href="https://calendly.com/your-username/30min" ...>
```

Calendly 링크 형식:
- 30분: `https://calendly.com/your-username/30min`
- 1시간: `https://calendly.com/your-username/1hour`
- 모든 이벤트: `https://calendly.com/your-username`

## 6단계: 테스트

1. 웹사이트의 예약 버튼 클릭
2. 날짜/시간 선택
3. 예약 완료 후:
   - ✅ 본인 Google Calendar에 일정 추가 확인
   - ✅ 예약자에게 확인 이메일 발송 확인
   - ✅ PDF 링크 포함 확인

---

## 추가 기능 (Pro 플랜 - 선택사항)

무료 플랜으로도 충분하지만, Pro 플랜($12/월)에서는:
- 무제한 이벤트 유형
- SMS 알림
- 리마인더 이메일 커스터마이징
- 브랜딩 제거

---

## 대안: Cal.com (오픈소스, 완전 무료)

Calendly 대신 Cal.com 사용 가능:
1. https://cal.com 접속
2. Google 연동
3. 완전 무료 + 오픈소스

---

완료 후 GitHub에 배포하면 바로 작동합니다!
