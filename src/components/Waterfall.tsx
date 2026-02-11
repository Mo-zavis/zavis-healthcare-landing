"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cardShadow =
  "0px 0.71px 0.71px -0.42px rgba(0,0,0,0.03), 0px 1.81px 1.81px -0.83px rgba(0,0,0,0.03), 0px 3.62px 3.62px -1.25px rgba(0,0,0,0.03), 0px 6.87px 6.87px -1.67px rgba(0,0,0,0.03), 0px 13.65px 13.65px -2.08px rgba(0,0,0,0.03), 0px 30px 30px -2.5px rgba(0,0,0,0.03)";

export default function Waterfall() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        backgroundColor: "#F1F0EC",
        padding: "40px 0 60px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            damping: 100,
            stiffness: 240,
            mass: 2,
            delay: 0.2,
          }}
          style={{
            backgroundColor: "#fff",
            borderRadius: 24,
            padding: "32px 32px 40px",
            boxShadow: cardShadow,
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              {/* Traditional Waterfall bar */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "rgba(0,0,0,0.32)",
                  }}
                >
                  Traditional Waterfall
                </span>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 40,
                    borderRadius: 8,
                    backgroundColor: "#F1F0EC",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : {}}
                    transition={{
                      duration: 1.2,
                      delay: 0.4,
                      ease: [0.44, 0, 0.56, 1],
                    }}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      backgroundColor: "#ecebe8",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      paddingRight: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "rgba(0,0,0,0.56)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      3&ndash;6 months to go live
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* With Zavis bar */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#00C67E",
                  }}
                >
                  With Zavis
                </span>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 40,
                    borderRadius: 8,
                    backgroundColor: "#F1F0EC",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: "15%" } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0.44, 0, 0.56, 1],
                    }}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      backgroundColor: "#00C67E",
                      borderRadius: 8,
                      minWidth: 100,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#fff",
                        whiteSpace: "nowrap",
                      }}
                    >
                      72 Hours
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            <p
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: 15,
                fontWeight: 500,
                lineHeight: 1.5,
                textAlign: "center",
                color: "rgba(0,0,0,0.56)",
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              Traditional healthcare IT projects demand months of requirements
              gathering, vendor selection, and integration work before seeing
              any value. Zavis goes live in 72 hours &mdash; your AI
              receptionist answering calls, your patients booking on WhatsApp,
              your data flowing clean from day one.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
