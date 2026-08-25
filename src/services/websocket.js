const WS_BASE_URL = import.meta.env.VITE_WS_BASE_URL;

/**
 * createWhatsAppSocket
 *
 * Description:
 * - Create an authenticated WebSocket connection for realtime WhatsApp events.
 * - Connect the frontend to the company and WhatsApp-number-specific realtime endpoint.
 * - Encode the authentication token before including it in the WebSocket query string.
 *
 * Notes:
 * - companyId, numberId, and token are required.
 * - The backend validates both authentication and tenant access before accepting the connection.
 * - Production environments must use a secure WSS endpoint.
 * - The caller is responsible for handling WebSocket lifecycle events such as open, message, error, and close.
 * - The authentication token must never be logged or exposed through application diagnostics.
 */
export function createWhatsAppSocket(companyId, numberId, token) {
    if (!companyId || !numberId || !token) {
        throw new Error(
            "No fue posible crear la conexión WebSocket: faltan parámetros requeridos."
        );
    }

    const url = `${WS_BASE_URL}/ws/whatsapp/companies/${companyId}/numbers/${numberId}/?token=${encodeURIComponent(token)}`;

    return new WebSocket(url);
}