import Vapi from "@vapi-ai/web"

const vapiApiKey = import.meta.env.VITE_VAPI_API_KEY
const assistantId = import.meta.env.VITE_ASSISTANT_ID

export const vapi = new Vapi(vapiApiKey)
export const startAssistant = async (firstName, lastName, email, phone) => {
    const assistantOverrides = {
        variableValues: {
            firstName,
            lastName,
            email,
            phone
        }
    }
    return await vapi.start(assistantId, assistantOverrides)
}

export const stopAssistant = () => {
    vapi.stop()
}