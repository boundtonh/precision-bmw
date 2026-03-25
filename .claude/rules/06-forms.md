# Scheduling Form Rules

## Usage
The scheduling form appears at the bottom of every page.
It is a REQUEST form — not a live booking system.
Include this note visibly: "We'll confirm your requested date and time within 1 business day."

## Quick Contact Strip
Displayed prominently on the form:
"For the quickest response:"
- Text Us button → opens SMS with pre-written message "I'd like to schedule an appointment." to 6036793883
- Call Us button → click-to-call tel:6036793883
Both buttons styled as secondary buttons.

## Fields (in order)
1. BMW Model — autocomplete input, data from /src/data/bmwModels.ts, "Other" fallback if not found
2. Service Required — multi-select with line icons, data from /src/data/services.ts, border highlight on select
3. Best Date — date picker, no past dates
4. Full Name — text input, required
5. Phone — tel input, required
6. Email — email input, required
7. Preferred Communication — multi-select buttons: Call, Text, Email (can select multiple)
8. City/Town — text input, optional
9. Additional Info — textarea, optional

## Confirmation Preference
After Preferred Communication field add note:
"How would you like us to confirm? Select all that apply."

## Submission
- Use React Hook Form for validation
- On submit: show success message
  "Thanks! We've received your request and will be in touch within 1 business day to confirm your appointment."
- No actual backend — mock handler
- Add comment: // TODO: wire up email backend (Resend or similar)

## Validation
- Full Name: required
- Phone: required, valid phone format
- Email: required, valid email format
- BMW Model: required
- Service Required: required, at least one
- Best Date: required, no past dates
- Preferred Communication: required, at least one